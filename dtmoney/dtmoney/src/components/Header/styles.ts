import styled from "styled-components";

export const Container = styled.header`
    /* background: var(--blue); */
    background: transparent radial-gradient(closest-side at 50% 50%, #B0009F 0%, #5B0077 100%) 0% 0% no-repeat padding-box;

`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 12rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        font-size: 1rem;
        color: #FFFFFF;
        background: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;

        transition: filter 0.9s;

        &:hover {
            filter: brightness(9);
        }

    }
`;

