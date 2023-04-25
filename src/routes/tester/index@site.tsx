import { component$, useStore, $ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import {Button} from "~/components/button";

export default component$(() => {
    const state = useStore({ name:"unassigned"})

    const handleName = $(() => {
        state.name = "assigned"
    });
    return (
        <>
            <h1>Test page</h1>
            <Button handleFunction={handleName}>hello</Button>
            <div>Name: {state.name}</div>
        </>
    );
});

export const head: DocumentHead = {
    title: 'Test page',
    meta: [
        {
            name: 'description',
            content: 'welcome to test page',
        },
    ],
};
