import Cart from "./cart";
function home(){
    return(
        <div>
            <nav>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item active" aria-current="page">Home</li>
                </ol>
            </nav>
            <Cart />
        </div>
    );
}
export default home;