// define a qwik component
import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
export const Navigation = component$(() => {
  return (
      <div class="flex items-center px-54 justify-between bg-red-200 shadow-xl">
          <div>LOGO</div>
          <div>
              <ul class={"flex gap-x-20 list-none"}>
                  <li><Link href="/"> Home</Link></li>
                  <li><Link href="/index@site">Tester</Link></li>
                  <li>About</li>
              </ul>
          </div>
      </div>
  )});
