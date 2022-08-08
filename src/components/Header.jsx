import {Link} from 'react-router-dom';

export default function Header() {
    
    return (
        <div className="flex justify-between px-2 py-4 bg-slate-200">
            <Link to="/" className="text-xl">BlindSide video UI</Link>

            <Link to="/login" className="bg-blue-600 text-white rounded-md px-6 py-2 hover:bg-blue-500">Login</Link>

        </div>
    );
}