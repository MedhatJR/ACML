import { useState } from "react";


const DropDown = ({ setFilter ,filter}) => {
    function displayRadioValue() {
        var ele = document.getElementsByName('question1');

        for (let i = 0; i < ele.length; i++) {
            if (ele[i].checked)
                return ele[i].value;
        }
    }
    // const [x, setX] = useState('Title');

    return (
        <div className="dropdown">

            <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton"
                data-bs-toggle="dropdown" aria-expanded="false" >
                Filter:{filter}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li>
                    <a className="dropdown-item" href="#">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" value="Title" id="Checkme1" name="question1" onChange={() => {
                                // setX(displayRadioValue());
                                setFilter(displayRadioValue())
                            }} />
                            <label className="form-check-label" htmlFor="Checkme1">Title</label>
                        </div>
                    </a>
                </li>
                <li>
                    <a className="dropdown-item" href="#">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" value="Major" id="Checkme2" name="question1" onChange={() => {
                                // setX(displayRadioValue());
                                setFilter(displayRadioValue());
                            }} />
                            <label className="form-check-label" htmlFor="Checkme2">Major</label>
                        </div>
                    </a>
                </li>
                <li>
                    <a className="dropdown-item" href="#">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" value="Instructor" id="Checkme3" name="question1" onChange={() => {
                                // setX(displayRadioValue());
                                setFilter(displayRadioValue())
                            }} />
                            <label className="form-check-label" htmlFor="Checkme3">Instructor</label>
                        </div>
                    </a>
                </li>
                <li>
                    <a className="dropdown-item" href="#">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" value="Rating" id="Checkme4" name="question1" onChange={() => {
                                // setX(displayRadioValue());
                                setFilter(displayRadioValue())
                            }} />
                            <label className="form-check-label" htmlFor="Checkme3">Rating</label>
                        </div>
                    </a>
                </li>
                <li>
                    <a className="dropdown-item" href="#">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" value="Price" id="Checkme5" name="question1" onChange={() => {
                                // setX(displayRadioValue());
                                setFilter(displayRadioValue())
                            }} />
                            <label className="form-check-label" htmlFor="Checkme3">Price</label>
                        </div>
                    </a>
                </li>

            </ul>
        </div>
    );
}
export default DropDown
