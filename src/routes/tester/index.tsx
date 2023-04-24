import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
    return (
        <>
            <h1>Test page</h1>
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
