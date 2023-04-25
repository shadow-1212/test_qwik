import { $, component$, Slot, useTask$, useSignal, useStore  } from '@builder.io/qwik';

interface ItemProps {
    handleFunction: any;
}

export const Button = component$((props: ItemProps) => {
  // $: onclick = () => {
  //   console.log('click');
  // }
  const message=useSignal('hello');
  const state=useStore({
      message:"State none",
      color:"red"
  });
  const handleClick=$(() => {
      state.message="Button Clicked"
      props.handleFunction()
  })

  useTask$(({track}) => {
      track(state)
      console.log(state.message)
  });

    return (
    <button
        onClick$={handleClick}
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      <Slot />
    </button>
)});
