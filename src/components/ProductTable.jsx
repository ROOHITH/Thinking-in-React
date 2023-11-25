import './ProductTable.css'
function ProductTable(){
    const style={
        border:" 1px solid lavender"
    }
    
    return(<>
    <div style={style}className="ProductTable-div">
        <h3><span className="span1" >Name</span> <span>Price</span></h3>
    </div>
    </>);
}
export default ProductTable;