
function Search(){
    return(
        <section className="search_container">
            <h4>Categori name</h4>
            <button>icon reverse</button>
            <div>
                <h5>notes num</h5>
                <div className="search_icon_container">
                    <button>
                        icon1
                    </button>
                    <button>
                        icon2
                    </button>
                    <button>
                        icon3
                    </button>
                </div>
            </div>
            <div>
                <input type="text" name="searchInput" id="inputText" />
                <button>search icon</button>
            </div>
        </section>
    )
}
function NoteCards(){
    return(
        <section className="card_list_container">
            {
                <Card/>
            }
        </section>
    )
}
function Card(){
    return(
        <div className="card_container">
            <div>
                <img src="" alt="color icon" />
                <h6>Categori name</h6>
                <h6>00/00/0000</h6>
            </div>
            <div>
                <h5>note Title</h5>
                <h5>note description</h5>
            </div>
        </div>
    )
}
export default function NodeList(){
    return(
        <>
            <Search/>
            <NoteCards/>
        </>
    )
}