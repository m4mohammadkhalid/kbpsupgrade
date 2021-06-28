import React,{ useState, useEffect } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SideBar from '../components/SideBar'


import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { createAction } from '../../store/asyncMethods/PostMethods';
//import Loader from './Loader';

const BlankPage = (props) => {

    const { createErrors, redirect, loading } = useSelector(
		(state) => state.PostReducer
	);
	const [currentImage, setCurrentImage] = useState('Choose image');
	const [imagePreview, setImagePreview] = useState('');
	const dispatch = useDispatch();
	const {
		user: { _id, name },
	} = useSelector((state) => state.AuthReducer);
	const fileHandle = (e) => {
		if (e.target.files.length !== 0) {
			setCurrentImage(e.target.files[0].name);
			setState({
				...state,
				[e.target.name]: e.target.files[0],
			});
			const reader = new FileReader();
			reader.onloadend = () => {
				setImagePreview(reader.result);
			};
			reader.readAsDataURL(e.target.files[0]);
		}
	};
	const [state, setState] = useState({
		title: '',
		description: '',
		image: '',
	});
	const handleDescription = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value,
		});
	};
	const [slug, setSlug] = useState('');
	const [slugButton, setSlugButton] = useState(false);
	const slugHandle = (e) => {
		setSlugButton(true);
		setSlug(e.target.value);
	};
	const handleURL = (e) => {
		e.preventDefault();
		setSlug(slug.trim().split(' ').join('-'));
	};
	const handleInput = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value,
		});
		const createSlug = e.target.value.trim().split(' ').join('-');
		setSlug(createSlug);
	};
	const [value, setValue] = useState('');
	const createPost = (e) => {
		e.preventDefault();
		const { title, description, image } = state;
		const formData = new FormData();
		formData.append('title', title);
		formData.append('body', value);
		formData.append('image', image);
		formData.append('description', description);
		formData.append('slug', slug);
		formData.append('name', name);
		formData.append('id', _id);
		dispatch(createAction(formData));
	};
	useEffect(() => {
		if (redirect) {
			props.history.push('/dashboard');
		}
		if (createErrors.length !== 0) {
			createErrors.map((err) => toast.error(err.msg));
		}
	}, [createErrors, redirect]);

    return (
        <>
            <div className="main-wrapper">
                <Header />
                <SideBar />

                <div className="page-wrapper" style={{ minHeight: 800 }}>
                    <div className="content container-fluid">
                        {/* Page Header */}
                        <div className="page-header">
                            <div className="row">
                                <div className="col-sm-12">
                                    <h3 className="page-title">Blank Page</h3>
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                                        <li className="breadcrumb-item active">Blank Page</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* /Page Header */}
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="card-title">Two Column Horizontal Form</h5>
                                        <Toaster
                                            position='top-right'
                                            reverseOrder={false}
                                            toastOptions={{
                                                style: {
                                                    fontSize: '14px',
                                                },
                                            }}
                                        />
                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={createPost}>
                                            <div className="row">
                                                <div className="col-xl-8">
                                                    <h5 className="card-title">Personal details</h5>
                                                    <div className="form-group row">
                                                        <label className="col-lg-3 col-form-label">Title</label>
                                                        <div className="col-lg-9">
                                                            <input type='text' name='title'	id='title' value={state.title} onChange={handleInput} className="form-control m-b-20" />
                                                        </div>

                                                        <label className="col-lg-3 col-form-label">Slug</label>
                                                        <div className="col-lg-9">
                                                            <input type='slug' name='slug'	id='title' value={slug} onChange={slugHandle} className="form-control m-b-20" />
                                                        </div>
                                                        <div className='group'>
										{slugButton ? (
											<button class='btn btn-default' onClick={handleURL}>
												Update Slug
											</button>
										) : (
											''
										)}
									</div>

                                    <div className='group'>
										<div className='imagePreivew'>
											{imagePreview ? <img src={imagePreview} /> : ''}
										</div>
									</div>

                                                        <label className="col-lg-3 col-form-label">Image</label>
                                                        <div className="col-lg-9">
                                                            <input type='file' name='image'	id='image'  onChange={fileHandle} className="form-control m-b-20" />
                                                        </div>

                                                        <label className="col-lg-3 col-form-label">Image</label>
                                                        <div className="col-lg-9">
                                                        <ReactQuill
                                                                    theme='snow'
                                                                    id='body'
                                                                    placeholder='Post body...'
                                                                    value={value}
                                                                    onChange={setValue}
                                                                />
                                                        </div>
                                                        
                                                        <label className="col-lg-3 col-form-label">Body</label>
                                                        <div className="col-lg-9">
                                                        <textarea name='description' id='description' defaultValue={state.description} onChange={handleDescription} maxLength='150' rows={4} cols={5} className="form-control" placeholder="Enter message"  />
                                                        {state.description ? state.description.length : 0}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <button type="submit" value='Create post' className="btn btn-primary">Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* /Page Wrapper */}
            </div>


            <Footer />
        </>
    )
}

export default BlankPage
