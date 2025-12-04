import { useState } from "react";
import Button from "../ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/Card";
import { Pencil, Plus, Trash2, BookOpen } from "lucide-react";

export const BooksGrid = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [books, setBooks] = useState([
    {
      id: "1",
      title: "Clean Code",
      author: "Robert C. Martin",
      coverUrl: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&h=400&fit=crop",
      description: "A handbook of agile software craftsmanship.",
      readDate: "2023"
    },
    {
      id: "2",
      title: "Design Patterns",
      author: "Gang of Four",
      coverUrl: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=400&fit=crop",
      description: "Elements of reusable object-oriented software.",
      readDate: "2022"
    },
    {
      id: "3",
      title: "The Pragmatic Programmer",
      author: "Andrew Hunt & David Thomas",
      coverUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop",
      description: "Your journey to mastery in software development.",
      readDate: "2022"
    },
    {
      id: "4",
      title: "Refactoring",
      author: "Martin Fowler",
      coverUrl: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=300&h=400&fit=crop",
      description: "Improving the design of existing code.",
      readDate: "2021"
    }
  ]);

  const addBook = () => {
    const newBook = {
      id: Date.now().toString(),
      title: "New Book",
      author: "Author Name",
      coverUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop",
      description: "Book description.",
      readDate: "2024"
    };
    setBooks([...books, newBook]);
  };

  const deleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  const updateBook = (id, field, value) => {
    setBooks(books.map(book =>
      book.id === id ? { ...book, [field]: value } : book
    ));
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2">Recommended Books</h2>
            <p className="text-muted-foreground">Books that shaped my development journey</p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsEditing(!isEditing)}
              className="mb-4 bg-white/10 hover:bg-white/20"
            >
              <Pencil className="h-4 w-4" />
            </Button>
            {isEditing && (
              <Button
                variant="outline"
                size="sm"
                className="ml-2 bg-blue-600 text-white hover:bg-blue-700"
                onClick={addBook}
              >
                <Plus className="h-4 w-4 mr-2" />Add Book
              </Button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {books.map((book) => (
            <Card key={book.id} className="overflow-hidden hover-lift group relative">
              {isEditing && (
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => deleteBook(book.id)}
                  className="absolute top-2 right-2 z-10"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              )}

              <div className="relative h-64 overflow-hidden bg-muted">
                {isEditing ? (
                  <label className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black text-white">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onload = () => updateBook(book.id, "coverUrl", reader.result);
                          reader.readAsDataURL(file);
                        }
                      }}
                      className="hidden"
                    />
                    <span className="text-white font-semibold px-6 py-3 rounded bg-black bg-opacity-90 border border-white/20 shadow-lg">Upload Image</span>
                  </label>
                ) : (
                  <img
                    src={book.coverUrl}
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
              </div>

              <CardHeader>
                {isEditing ? (
                  <>
                    <input
                      type="text"
                      value={book.title}
                      onChange={(e) => updateBook(book.id, "title", e.target.value)}
                      className="font-bold bg-transparent border-b border-border focus:outline-none focus:border-primary w-full mb-2"
                    />
                    <input
                      type="text"
                      value={book.author}
                      onChange={(e) => updateBook(book.id, "author", e.target.value)}
                      className="text-sm bg-transparent border-b border-border focus:outline-none focus:border-primary w-full text-muted-foreground"
                    />
                  </>
                ) : (
                  <>
                    <CardTitle className="line-clamp-2">{book.title}</CardTitle>
                    <CardDescription>{book.author}</CardDescription>
                  </>
                )}
              </CardHeader>

              <CardContent>
                {isEditing ? (
                  <>
                    <textarea
                      value={book.description}
                      onChange={(e) => updateBook(book.id, "description", e.target.value)}
                      className="w-full text-sm bg-transparent border border-border focus:outline-none focus:border-primary p-2 rounded resize-none mb-2"
                      rows={2}
                    />
                    <input
                      type="text"
                      value={book.readDate}
                      onChange={(e) => updateBook(book.id, "readDate", e.target.value)}
                      placeholder="Year"
                      className="w-full text-xs bg-transparent border-b border-border focus:outline-none focus:border-primary text-muted-foreground"
                    />
                  </>
                ) : (
                  <>
                    <p className="text-sm text-muted-foreground line-clamp-3">{book.description}</p>
                    <p className="text-xs text-primary mt-2">Read in {book.readDate}</p>
                  </>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
