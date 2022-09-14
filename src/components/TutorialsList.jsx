import { useEffect, useState } from 'react';
import TutorialService from '../services/TutorialService';
import ModalUdate from './ModalUdate';


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

    const handleClose = () => setShow(false);

    useEffect(() => {
        retrieveTutorials();
    }, [tutorial])

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
        console.log("soy la palabra que ingesa antes" + searchTitle);
        TutorialService.findByTitle(searchTitle)
            .then(response => {
                setTutorials(response.data);

            })
            .catch(e => {
                console.log(e);
            });
    };
    const update = (t) => {
        console.log(t)
        setTutorial(t)
        setShow(true)
    }

    const updateTutorial = () => {
        console.log(tutorial.id)
        console.log("update")


        TutorialService.updateTutorial(tutorial.id, tutorial)
            .then(res => {
                setTutorial(res.data)
                console.log(res)
            })
        handleClose()
    }

    const handleInputChange = (e) => {
        console.log("hola change")
        const { name, value } = e.target
        console.log(name)
        setTutorial({ ...tutorial, [name]: value })
        console.log(value)

    }

    return (
        <div>
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
                        <th scope="col">action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        tutorials.map(t =>
                            <tr key={t.id} >
                                <th scope="row">{t.id} </th>
                                <td>{t.title} </td>
                                <td>{t.description} </td>
                                <td><button data-bs-toggle="modal" data-bs-target="#exampleModal"
                                    onClick={() => { update(t) }}  >
                                    update</button> </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div >
    );
};

export default TutorialsList;
