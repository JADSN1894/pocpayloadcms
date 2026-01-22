import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { ExperimentItem } from '@/payload-types'

import { Fragment } from 'react/jsx-runtime'
import { v4 } from 'uuid'

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
            <Fragment key={v4()}>
              {<TableHead className="text-center">{headerName}</TableHead>}
            </Fragment>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={v4()}>
            <TableCell key={v4()} className="font-medium text-left">
              {row.qtde}
            </TableCell>
            <TableCell key={v4()} className="font-medium text-left">
              {row.name}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
