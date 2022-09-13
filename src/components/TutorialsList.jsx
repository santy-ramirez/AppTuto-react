import { useEffect, useState } from 'react';
import TutorialService from '../services/TutorialService';

const TutorialsList = () => {
    const [tutorials, setTutorials] = useState([])
    const [searchTitle, setSearchTitle] = useState("");


    useEffect(() => {
        retrieveTutorials();
    }, [])

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
                //console.log(response)
                setTutorials(response.data);

            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <div>
            <h2>tutoriales</h2>
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

                    </tr>
                </thead>
                <tbody>

                    {
                        tutorials.map(t =>
                            <tr key={t.id} >
                                <th scope="row">{t.id} </th>
                                <td>{t.title} </td>
                                <td>{t.description} </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div >
    );
};

export default TutorialsList;
/**
 * 
 * 
 */