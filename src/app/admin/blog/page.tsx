import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusCircle } from "lucide-react";

export default function AdminBlogPage() {
    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-bold font-headline">Manage Blog Posts</h1>
                    <p className="text-muted-foreground">Create, edit, or publish articles for the Blog.</p>
                </div>
                <Button>
                    <PlusCircle className="mr-2 h-4 w-4"/>
                    New Post
                </Button>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Article List</CardTitle>
                    <CardDescription>This is where the list of blog posts will be displayed for management.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground text-center py-8">Blog post management table coming soon.</p>
                </CardContent>
            </Card>
        </div>
    )
}
