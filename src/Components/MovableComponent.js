import Moveable from "react-moveable";
import {Button, Card} from "react-bootstrap";
import {useEffect, useState} from "react";

const MovableComponent = (props) =>
{
    const [target, setTarget] = useState();
    const [frame, setFrame] = useState(
        {
            translate: [0,0],
        }
    );

    useEffect(() => {
        setTarget(document.querySelector("." + CSS.escape(props.id)))
    }, []);




    return (
        <div className="container">
            <div className= {props.id}>
                <Card>
                    <Card.Body>
                        <Card.Text>
                            OOOOOOO
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <Moveable
                target={target}
                draggable={true}
                throttleDrag={0}
                zoom={1}
                origin={false}

                onDragOrigin={e => {
                    frame.translate = e.drag.beforeTranslate;
                    frame.transformOrigin = e.transformOrigin;
                }}
                onDragStart={e => {
                    e.set(frame.translate);
                }}
                onDrag={e => {
                    frame.translate = e.beforeTranslate;
                }}
                onRender={e => {
                    const { translate, transformOrigin } = frame;
                    e.target.style.transformOrigin = transformOrigin;
                    e.target.style.transform = `translate(${translate[0]}px, ${translate[1]}px)`;
                }}
            />
        </div>

    )
}
export default MovableComponent