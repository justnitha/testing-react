import React,{ useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
// Fungsi First
const First = () =>{
    // const(function)
    const Navigate = useNavigate()
    // kiri -> Getter
    // Kanan -> Setter
    const [pacarSaya,setPacarSaya] = useState(0)
    const [namaPacar,setNamaPacar] = useState("")
    // memakai UseEfect 
    useEffect(() => {
        if(pacarSaya < 0){
            setNamaPacar(alert("EROR BREHH !!!!!"))
            setPacarSaya(0)
        }
        else if (pacarSaya == 1) {
            setNamaPacar("bunga")
        }
        else if(pacarSaya == 5) {
            setNamaPacar("githhubb")
        }
        else if(pacarSaya > 8) {
            setNamaPacar("Ni Putu Lebih Kapasistas")
        }
    },[pacarSaya])

    return(
        <div className="text-center text-5xl bg-blue-500 h-screen p-64">
            <h3>HOMEPAGE</h3>
            <h1 className="mt-5 text-lg">Saya Memiliki : {pacarSaya} Pacar</h1>
            <h5 className="text-lg">Nama Pacar: {namaPacar}</h5>
            {/* prev == callback fungsion(prev bisa diganti dengan kata apa saja) */}
            <button onClick={() => setPacarSaya((prev) => prev +1)} className="p-4 bg-rose-400 rounded-2xl text-lg">Tambah pacar</button>
            <button onClick={() => setPacarSaya((prev) => prev -1)} className="p-4 bg-cyan-400 rounded-2xl text-lg">Putuskan pacar</button>
        </div>
    )
}
export default First