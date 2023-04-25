//qwik page
import { component$, useStore, $ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import {Button} from "~/components/button";

export default component$(() => {
    const state = useStore({ name:"unassigned"})
    return(
        <div class="flex  items-center justify-center grow ">
            <div class="flex shadow-xl rounded">
                <div class="p-10 ">
                    <h1>Signup page</h1>
                    <label  for="inputPassword5" class="form-label">Password</label>
                    <input type="password" id="inputPassword" class="form-control"
                           aria-labelledby="passwordHelpBlock"/>

                </div>
            </div>
        </div>
    )
})

export const head: DocumentHead = {
    title: 'Signup page',
    meta: [
        {
            name: 'description',
            content: 'welcome to test page',
        },
    ],
};
