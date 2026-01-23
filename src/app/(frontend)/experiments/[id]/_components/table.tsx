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
    <Table className="sm:w-1/2 lg:w-[96%]">
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
            <TableCell key={v4()} className="font-medium text-center sm:text-ellipsis">
              {row.qtde}
            </TableCell>
            <TableCell key={v4()} className="font-medium text-left text-wrap sm:text-ellipsis">
              {row.name}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
