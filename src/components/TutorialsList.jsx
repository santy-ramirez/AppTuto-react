import { useEffect, useState } from 'react';
import TutorialService from '../services/TutorialService';
import ModalUdate from './ModalUdate';
import NavBar from './NavBar'

const initialState = {
    id: null,
    title: "",
    description: "",
    published: false
}
const TutorialsList = () => {
    const [tutorial, setTutorial] = useState(initialState);
    const [tutorials, setTutorials] = useState([])
    const [searchTitle, setSearchTitle] = useState("");
    const [show, setShow] = useState(false);
    const [isDelete, setIsDelete] = useState(null);

    const handleClose = () => setShow(false);

    useEffect(() => {
        retrieveTutorials();
    }, [tutorial, isDelete])


    const retrieveTutorials = () => {
        TutorialService.geAll()
            .then(res => {
                console.log(res.data)
                setTutorials(res.data)
            })
            .catch(err => console.error(err))
    }

    const onChangeSearchTitle = e => {
        const searchTitle = e.target.value;
        setSearchTitle(searchTitle);
    };


    const findByTitle = () => {
        TutorialService.findByTitle(searchTitle)
            .then(response => {
                setTutorials(response.data);

            })
            .catch(e => {
                console.log(e);
            });
    };
    const update = (t) => {
        console.log(t.published);
        setTutorial(t)
        setShow(true)
    }


    const updatePublished = (t) => {
        let arrarcopi = { ...t }
        let publi = arrarcopi.published

        if (publi) {
            arrarcopi.published = false
        } else {
            arrarcopi.published = true

        }

        TutorialService.updateTutorial(arrarcopi.id, arrarcopi)
            .then(res => {
                setTutorial(res.data)
                console.log(res)
            })
            .catch(err => console.error(err))


    }


    const updateTutorial = () => {
        TutorialService.updateTutorial(tutorial.id, tutorial)
            .then(res => {
                setTutorial(res.data)
                console.log(res)
            })
            .catch(err => console.error(err))
        handleClose()
    }


    const handleInputChange = (e) => {
        const { name, value } = e.target
        setTutorial({ ...tutorial, [name]: value })
    }



    const handleDelete = (id) => {
        setIsDelete(false)
        TutorialService.deleteTutorial(id)
            .then(res => {
                if (res.status) {
                    console.log("si es 200")
                    setIsDelete(true)

                }
            })
            .catch(err => console.error(err))
    }
    const on = (e) => {
        console.log(e)
    }

    return (
        <div>
            <NavBar />
            <div className='container-sm' >
                <h2>tutoriales</h2>
                <div>{show && <ModalUdate
                    handleClose={handleClose}
                    show={show}
                    handleInputChange={handleInputChange}
                    tutorial={tutorial}
                    updateTutorial={updateTutorial} />}
                </div>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by title"
                        value={searchTitle}
                        onChange={onChangeSearchTitle}
                    />
                    <div className="input-group-append">
                        <button
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={findByTitle}
                        >
                            Search
                        </button>
                    </div>
                </div>
                <table className="table">
                    <thead>
                        <tr  >
                            <th scope="col">id</th>
                            <th scope="col">title</th>
                            <th scope="col">description</th>
                            <th scope="col">Status</th>
                            <th scope="col">actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            tutorials.map(t =>
                                <tr key={t.id} >
                                    <th scope="row">{t.id} </th>
                                    <td>{t.title} </td>
                                    <td>{t.description} </td>
                                    <td>{t.published ? "Published" : "Pending"} </td>
                                    <td><button className="m-1 btn btn-warning"
                                        onClick={() => { update(t) }}  >
                                        update</button><button className="btn btn-danger "
                                            onClick={() => handleDelete(t.id)}
                                        >Delete</button>
                                        <button

                                            className=" m-2 btn btn-outline-secondary"
                                            type="button"

                                            onClick={() => { updatePublished(t) }}

                                        >   {t.published ? "unPublish" : "published"} </button>

                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default TutorialsList;
