import { component$, Slot } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import {Navigation} from "~/components/navigation/navigation";


export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  return (
    <div class="page min-h-screen flex flex-col justify-between">
      <main class="flex flex-col h-full grow ">
          <Navigation/>
          <div class="flex flex-col grow">
              <Slot/>
          </div>
      </main>
      <div class="">
        <div class="">
            <div class="bg-gray-500 p-5">Footer</div>
        </div>
      </div>
    </div>
  );
});
