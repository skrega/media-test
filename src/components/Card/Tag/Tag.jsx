const Tag = ({title, color}) => {
    return ( <span className={`${color}`}>#{title}</span> );
}
 
export default Tag;