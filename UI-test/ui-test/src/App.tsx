import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table"

import {
  Dialog,
  DialogTrigger,
} from "./components/ui/dialog"

import { Button } from "./components/ui/button"
import { PlusCircle } from 'lucide-react'
import { ProductsFilters } from "./components/products-filters"
import { CreateProductDialog } from "./components/create-product-dialog"


export function App() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold">Produtos</h1>

      <div className="flex items-center justify-between">

        <ProductsFilters />
   
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className="w-4 h-4 mr-2" />
              Novo Produto
            </Button>
          </DialogTrigger>

          <CreateProductDialog />
          
        </Dialog>
      </div>

      <div className="border rounded-lg p-2">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Produto</TableHead>
              <TableHead>Preço</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {Array.from({ length: 10 }).map((_, i) => {
              return (
                <TableRow key={1}>
                  <TableCell>82189djadj2ujd</TableCell>
                  <TableCell>Celular {i}</TableCell>
                  <TableCell>2999</TableCell>
                </TableRow>
              )
            })}
          </TableBody>


        </Table>
      </div>
    </div>
  )
}

export default App
