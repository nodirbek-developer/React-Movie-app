import Reac,{useState} from 'react'

export default function Navbar({getData}) {
    const [value,setValue]=useState("Kino nomi...")
    return (
<nav class="navbar navbar-expand-lg bg-primary">
    <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>

        </ul>
        <div class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder={value} aria-label="Search" onChange={(e)=>setValue(e.target.value)}/>
        <button class="btn btn-success" type="submit" onClick={()=>getData(value)}>Search</button>
        </div>
    </div>
    </div>
</nav>
    )
}
