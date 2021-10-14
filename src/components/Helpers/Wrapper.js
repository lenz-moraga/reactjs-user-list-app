const Wrapper = props => {
    return props.children;
}
/*
    This function/component fulfills the necessity of react of having a wrapper component for the elements createElement will render, another option to this approach is to use the <React.Fragment>, the empty tags (<></>), the Card component which is similar to this one, but uses more properties to assign classes, and styling, and the final option is to just wrap the content into a div.
*/

export default Wrapper;