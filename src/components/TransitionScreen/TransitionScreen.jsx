import './transitionScreen.css'

function TransitionScreen({ message, onContinue }) {
    return (
        <div className="transition-screen">
            <p>{message}</p>
            <button className='continue-button' onClick={onContinue}>Continue</button>
        </div>
    );
}

export default TransitionScreen;