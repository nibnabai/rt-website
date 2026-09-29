const COLUMNS = 6;
const ROWS = 6;

/** Partial fills in data rows (row 0 = header). */
const FILLED: Array<{ row: number; col: number; partial?: boolean }> = [
  { row: 1, col: 0, partial: true },
  { row: 1, col: 1, partial: true },
  { row: 2, col: 0, partial: true },
  { row: 2, col: 1, partial: true },
  { row: 3, col: 0, partial: true },
  { row: 3, col: 1, partial: true },
  { row: 4, col: 0, partial: true },
  { row: 4, col: 1, partial: true },
  { row: 5, col: 0, partial: true },
  { row: 5, col: 1, partial: true }
];

function hasFill(row: number, col: number) {
  return FILLED.some((c) => c.row === row && c.col === col);
}

function isPartial(row: number, col: number) {
  return FILLED.some((c) => c.row === row && c.col === col && c.partial);
}

export function SpreadsheetMockup() {
  return (
    <div className="flex h-[158px] w-full max-w-[348px] flex-col overflow-hidden rounded-[18px] border border-[#e4e4e4] bg-white">
      <p className="px-[11px] pt-[11px] text-[11px] font-medium uppercase tracking-normal text-[#616161]">
        Scorecard.xlsx
      </p>
      <div className="mt-3 flex-1 px-[11px] pb-3">
        <div
          className="grid h-full w-full gap-x-[4px] gap-y-1"
          style={{
            gridTemplateColumns: `repeat(${COLUMNS}, minmax(0, 1fr))`,
            gridTemplateRows: `12px repeat(${ROWS}, 12px)`
          }}
        >
          {Array.from({ length: COLUMNS }, (_, col) => (
            <div key={`h-${col}`} className="h-3 rounded-[2px] bg-[#dddee1]" />
          ))}
          {Array.from({ length: ROWS }, (_, row) =>
            Array.from({ length: COLUMNS }, (_, col) => {
              const filled = hasFill(row, col);
              const partial = isPartial(row, col);
              return (
                <div
                  key={`${row}-${col}`}
                  className={
                    filled
                      ? 'relative h-3 overflow-hidden rounded-[2px] border border-[#acacac] bg-[#f0f2f5]'
                      : 'h-3 rounded-[2px] border border-[#acacac] bg-[#f0f2f5]'
                  }
                >
                  {partial ? (
                    <div className="absolute inset-y-0 left-0 w-[72%] rounded-[2px] bg-[#d6d7db]" />
                  ) : null}
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
