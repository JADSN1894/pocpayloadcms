import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { ExperimentItem } from '@/payload-types'
import { Fragment } from 'react/jsx-runtime'

export function TableExperimentItens({
  headers,
  rows,
}: {
  headers: string[]
  rows: ExperimentItem[]
}) {
  // headers: string[], rows: string[][]
  return (
    <Table>
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader>
        <TableRow>
          {headers.map((headerName) => (
            <Fragment key={crypto.randomUUID()}>
              {<TableHead className="text-center">{headerName}</TableHead>}
            </Fragment>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={crypto.randomUUID()}>
            <TableCell key={crypto.randomUUID()} className="font-medium text-left">
              {row.qtde}
            </TableCell>
            <TableCell key={crypto.randomUUID()} className="font-medium text-left">
              {row.name}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
