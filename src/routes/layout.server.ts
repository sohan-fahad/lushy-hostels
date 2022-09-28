export function load({ error, status }) {
    return {
        props: {
            title: `${status}: ${error.message}`
        }
    };
}