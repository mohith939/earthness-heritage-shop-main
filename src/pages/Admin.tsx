import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <main className="min-h-screen bg-secondary/50">
      <div className="container mx-auto px-4 py-20">
        <div className="retro-card max-w-4xl mx-auto p-8">
          <div className="text-center mb-8">
            <h1 className="font-display text-4xl font-bold mb-4">EARTHNESS Admin Panel</h1>
            <p className="text-muted-foreground">Welcome to the administration dashboard</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="retro-card p-6 text-center">
              <h3 className="font-display text-xl font-bold mb-2">Newsletter Subscribers</h3>
              <p className="text-muted-foreground mb-4">Manage email subscriptions</p>
              <Button variant="outline">View Subscribers</Button>
            </div>

            <div className="retro-card p-6 text-center">
              <h3 className="font-display text-xl font-bold mb-2">Contact Messages</h3>
              <p className="text-muted-foreground mb-4">View customer inquiries</p>
              <Button variant="outline">View Messages</Button>
            </div>

            <div className="retro-card p-6 text-center">
              <h3 className="font-display text-xl font-bold mb-2">Product Management</h3>
              <p className="text-muted-foreground mb-4">Add or edit products</p>
              <Button variant="outline">Manage Products</Button>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button variant="retro" asChild>
              <Link to="/">← Back to Home</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Admin;
