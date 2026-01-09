import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusCircle } from "lucide-react";

export default function AdminProductsPage() {
    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-bold font-headline">Manage Products</h1>
                    <p className="text-muted-foreground">Add, edit, or remove products from your collections.</p>
                </div>
                <Button>
                    <PlusCircle className="mr-2 h-4 w-4"/>
                    Add Product
                </Button>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Product List</CardTitle>
                    <CardDescription>This is where the list of products will be displayed for management.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground text-center py-8">Product management table coming soon.</p>
                </CardContent>
            </Card>
        </div>
    )
}
