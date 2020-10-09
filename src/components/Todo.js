"use-strict"
import React from 'react'


const Todo = () => {
    return (
        <div className="container card">

    {/*_________________Titre de la Card______________________*/}
            <div className="card-header row">
            <h2 className="card-title col-12">Titre de la Carte<span className="badge bg-success">cat</span></h2>
            <p className="col-6">date</p>
            </div>

   {/*_____________Description de la Card__________________*/}
            <div className="card-body">

                <p className="card-text"> card Description</p>
            </div>

    {/*_____________Edit Task Button__________________*/}
        <div className="card-footer btn-group">

            <button
            className="btn btn-light btn-sm btn-dark"
            type="button"
          >
            Rétablir
          </button>
          <button
            className="btn btn-light btn-sm"
            type="button"
          >
            Terminer
          </button>
          <button
          className="btn btn-danger btn-sm"
          type="button"
        >
          Supprimer
            </button>
        </div>
        </div>
    )
}



export default Todo