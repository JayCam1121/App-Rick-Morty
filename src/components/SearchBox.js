import axios from "axios";

const SearchBox = ({setLocation, setId, id}) => {

    const searchCharacter = () => {
        if(id <= 126) {
            axios.get(`https://rickandmortyapi.com/api/location/${id}`)
                .then(res => setLocation(res.data))
        } else {
            alert("Search limit up to 126 - try with a number under the limit")
        }
    }

    const keyEnter = event => {
        if(event.keyCode === 13 ){
            if(id <= 126) {
            axios.get(`https://rickandmortyapi.com/api/location/${id}`)
                .then(res => setLocation(res.data))
            } else {
                alert("Search limit up to 126 - try with a number under the limit") 
            }
        }
    }

    return (
        <div className="search-box">
            <input type="text" onChange={e => setId(e.target.value)} onKeyDown={e => keyEnter(e)} value={id} placeholder="Type a number 1 to 126"/>
            <button onClick={searchCharacter}>
                <i class="fa-solid fa-arrow-right-to-bracket"></i>
            </button>
        </div>
    );
};

export default SearchBox;