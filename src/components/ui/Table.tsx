import type { ReactNode } from 'react'

interface TableProps {
  children: ReactNode
}

function Table({ children }: TableProps) {
  return (
    <div className="table-wrapper">
      <table className="table">
        {children}
      </table>
    </div>
  )
}

export default Table