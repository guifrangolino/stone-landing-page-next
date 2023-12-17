type TotalmenteIntegradoSectionSelectorProps = {
  selected: number
  setSelected: (arg0: 0 | 1 | 2 | 3) => void
}

export function TotalmenteIntegradoSectionSelector({
  selected,
  setSelected,
}: TotalmenteIntegradoSectionSelectorProps) {
  return (
    <div className="flex w-full justify-center">
      <div className="flex w-full md:bg-transparent">
        <div className="mx-auto flex w-max items-center overflow-x-auto md:mb-6 md:rounded-[42px] md:px-6">
          {/* 1 */}
          <div
            className="flex h-14 items-center justify-center bg-background4-color first:pl-2 last:pr-2 md:h-[72px] md:first:rounded-l-[40px] md:last:rounded-r-[40px]"
            onClick={() => setSelected(0)}
          >
            <h3
              className={`cursor-pointer rounded-[40px] font-semibold ${
                selected === 0 ? 'text-primary-color' : 'text-color-gray'
              } ${selected === 0 && 'bg-white'} whitespace-nowrap p-2 md:p-4`}
            >
              Várias formas de vender
            </h3>
          </div>
          {/* 2 */}
          <div
            className="flex h-14 items-center justify-center bg-background4-color first:pl-2 last:pr-2 md:h-[72px] md:first:rounded-l-[40px] md:last:rounded-r-[40px]"
            onClick={() => setSelected(1)}
          >
            <h3
              className={`cursor-pointer rounded-[40px] font-semibold ${
                selected === 1 ? 'text-primary-color' : 'text-color-gray'
              } ${selected === 1 && 'bg-white'} whitespace-nowrap p-2 md:p-4`}
            >
              Gerencie sua equipe
            </h3>
          </div>
          {/* 3 */}
          <div
            className="flex h-14 items-center justify-center bg-background4-color first:pl-2 last:pr-2 md:h-[72px] md:first:rounded-l-[40px] md:last:rounded-r-[40px]"
            onClick={() => setSelected(2)}
          >
            <h3
              className={`cursor-pointer rounded-[40px] font-semibold ${
                selected === 2 ? 'text-primary-color' : 'text-color-gray'
              } ${selected === 2 && 'bg-white'} whitespace-nowrap p-2 md:p-4`}
            >
              Pague suas contas
            </h3>
          </div>
          {/* 4 */}
          <div
            className="flex h-14 items-center justify-center bg-background4-color first:pl-2 last:pr-2 md:h-[72px] md:first:rounded-l-[40px] md:last:rounded-r-[40px]"
            onClick={() => setSelected(3)}
          >
            <h3
              className={`cursor-pointer rounded-[40px] font-semibold ${
                selected === 3 ? 'text-primary-color' : 'text-color-gray'
              } ${selected === 3 && 'bg-white'} whitespace-nowrap p-2 md:p-4`}
            >
              Integre seu negócio
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}
