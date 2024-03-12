export default function Loading() {
  return (
    <section className='mb-14 mt-4 md:mb-24 md:mt-14'>
      <div className='container'>
        <div className='animate-pulse'>
          <div className='mb-12'>
            <h1 className='mb-4 h-16 rounded-lg bg-theme-sliver md:w-1/2'></h1>
            <p className='h-14 rounded-lg bg-theme-sliver md:w-2/3'></p>
          </div>
          <div className='grid gap-10 md:grid-cols-12'>
            <div className='md:col-span-4'>
              <ul className='space-y-8'>
                {Array.from({ length: 4 })?.map((_, i) => (
                  <li key={i} className='h-16 rounded-lg bg-theme-sliver'></li>
                ))}
              </ul>
            </div>
            <div className='rounded-lg bg-theme-sliver md:col-span-8'></div>
          </div>
        </div>
      </div>
    </section>
  );
}
