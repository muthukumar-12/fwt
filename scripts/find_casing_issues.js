const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const repo = process.cwd();
function unix(p){ return p.split(path.sep).join('/'); }

const gitFiles = execSync('git ls-files', { cwd: repo }).toString().split(/\r?\n/).filter(Boolean);

function walk(dir){
  let results = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for(const dirent of list){
    const full = path.join(dir, dirent.name);
    if(dirent.isDirectory()){
      results = results.concat(walk(full));
    } else if(/\.jsx?$/.test(dirent.name)){
      results.push(full);
    }
  }
  return results;
}

const files = walk(repo + path.sep + 'src');
const issues = [];
const importRegex = /from\s+['"]((?:\.\.|\.)\/[\w\-\.\/@\$\+]+)['"]/g;

for(const file of files){
  const content = fs.readFileSync(file, 'utf8');
  let m;
  while((m = importRegex.exec(content)) !== null){
    const imp = m[1];
    if(imp.startsWith('.') === false) continue;
    // try with extension
    const dir = path.dirname(file);
    let candidate = path.resolve(dir, imp);
    const exts = ['.jsx', '.js', '/index.jsx', '/index.js'];
    let resolved = null;
    if(fs.existsSync(candidate) && fs.statSync(candidate).isFile()) resolved = candidate;
    else {
      for(const e of exts){
        if(fs.existsSync(candidate + e)) { resolved = candidate + e; break; }
      }
    }
    const rel = resolved ? unix(path.relative(repo, resolved)) : unix(path.relative(repo, path.resolve(dir, imp)));
    const gitMatch = gitFiles.find(f => f.toLowerCase() === rel.toLowerCase());
    if(gitMatch){
      if(gitMatch !== rel){
        issues.push({ type: 'casing-mismatch', file: unix(path.relative(repo, file)), import: imp, expected: rel, git: gitMatch });
      }
    } else {
      issues.push({ type: 'missing-git', file: unix(path.relative(repo, file)), import: imp, expected: rel, git: null });
    }
  }
}

if(issues.length === 0){
  console.log('NO_MISMATCHES_FOUND');
  process.exit(0);
}
console.log(JSON.stringify(issues, null, 2));
process.exit(0);
