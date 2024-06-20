import * as React from 'react';
import { Button, Card, CardContent, Grid, Popover, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';

const FileUploading = () => {
    const fileInputRef = useRef(null);
    const [file, setFile] = useState(null);

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const uploadedFile = event.target.files[0];
        if (uploadedFile) {
            setFile(uploadedFile);
            console.log('File uploaded:', uploadedFile);
        }
    };

    return (
        <Grid item xs={12} sm={3} lg={3} style={{ color: 'rgb(107, 107, 107)', fontSize: 'small' }}>
            <input
                id="file"
                name="file"
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
            <Button
                variant="text"
                startIcon={<UploadFileOutlinedIcon />}
                style={{ width: '100px', height: '30px', border: '2px solid rgb(137, 77, 158)', borderRadius: '10px' }}
                onClick={handleButtonClick}
            >
                File
            </Button>
        </Grid>
    );
};

const ImageUploading = () => {
    const ImageInputRef = useRef(null);
    const [Image, setImage] = useState(null);

    const handleImageButtonClick = () => {
        ImageInputRef.current.click();
    };

    const handleImageChange = (event) => {
        const uploadedFile = event.target.files[0];
        if (uploadedFile) {
           const imageUrl = URL.createObjectURL(uploadedFile);
            setImage(imageUrl);
            console.log('File uploaded:', uploadedFile);
        }
    };

    return (
        <Grid item xs={12} sm={3} lg={3} style={{ color: 'rgb(107, 107, 107)', fontSize: 'small' }}>
            <input
                id="Image"
                name="Image"
                type="file"
                ref={ImageInputRef}
                style={{ display: 'none' }}
                onChange={handleImageChange}
                accept="image/webp, image/jpeg, image/png"
            />
            <Button
                variant="text"
                startIcon={<AddPhotoAlternateOutlinedIcon />}
                style={{ width: '100px', height: '30px', border: '2px solid rgb(137, 77, 158)', borderRadius: '10px' }}
                onClick={handleImageButtonClick}
            >
                Image
            </Button>
        </Grid>
    );
};

const Template = ({ templateIndex }) => {
    const [sectionName, setSectionName] = useState("");
    const [subHeading, setSubHeading] = useState("");
    const [writeSubHeading, setWriteSubHeading] = useState(false);
    const subHeadRef = useRef(null);
      const [anchorEl, setAnchorEl] = React.useState(null);

    const handleChange = (event) => {
        setSectionName(event.target.value);
        console.log(event.target.value);
    };

    const handleChangeOfHeading = (event) => {
        setSubHeading(event.target.value);
        console.log(event.target.value);
    };

    const writeSubHeadingHandler = () => {
        setWriteSubHeading((prev) => !prev);
    };

    const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

    useEffect(() => {
        if (writeSubHeading && subHeadRef.current) {
            subHeadRef.current.focus();
        }
    }, [writeSubHeading]);

    return (
        <Grid key={templateIndex}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2%' }}>
               
            </div>

            <Card sx={{ minWidth: 800, minHeight: 200, borderRadius: '10px' }}>
                <CardContent>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '29px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div>
                                <textarea
                                    type="text"
                                    value={sectionName}
                                    onChange={handleChange}
                                    style={{ outline: 'none', width: '340%', border: 'none', fontSize: '20px', fontWeight: '700', color: 'black', background: 'none' }}
                                    placeholder="New Section"
                                    rows={4}
                                />
                            </div>
                            <div>
                                <Button  variant="text"
                startIcon={<ArrowDropUpOutlinedIcon/>} onClick={handleClick}>...</Button>
                 <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <div style={{display:'flex',flexDirection:'column'}}>
        <Button sx={{ p: 2 }} variant='text' onClick={writeSubHeadingHandler}>H2 subHeading</Button>
        <Button sx={{ p: 2 }} variant='text'>File Upload</Button>
        <Button sx={{ p: 2 }} variant='text'>Image Upload</Button>
        </div>
      </Popover>
                                <Button
                                    variant="text"
                                    style={{ width: '10px', height: '40px', borderRadius: '10px', fontSize: '20px', backgroundColor: 'rgb(231, 231, 231)' }}
                                >
                                    + <span style={{fontSize:'10px',marginLeft:'10px'}}>ADD</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div><hr style={{ height: '2px', width: '100%', backgroundColor: "rgb(111, 240, 240)", border: 'none' }} /></div>
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                    {writeSubHeading && (
                        <div className="content">
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div>
                                    <textarea
                                        type="text"
                                        value={subHeading}
                                        ref={subHeadRef}
                                        onChange={handleChangeOfHeading}
                                        style={{ outline: 'none', width: '340%', border: 'none', fontSize: '20px', fontWeight: '700', color: 'black', background: 'none' }}
                                        placeholder="Sub Heading"
                                        rows={4}
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                    
                    </div>
                    <div className='button'>
                        <Grid container style={{ display: 'flex' }}>
                            <Grid item xs={12} sm={3} lg={3} style={{ color: 'rgb(107, 107, 107)', fontSize: "small" }}>
                                + Add With Sections
                            </Grid>
                            <div style={{ display: "flex" }}>
                                <Grid item xs={12} sm={3} lg={3} style={{ color: 'rgb(107, 107, 107)', fontSize: "small", marginRight: "50px" }}>
                                    <Button
                                        variant="text"
                                        style={{ width: '150px', fontSize: 'small', height: '30px', border: '2px solid rgb(137, 77, 158)', borderRadius: '10px' }}
                                        onClick={writeSubHeadingHandler}
                                    >
                                        H2 Sub-Heading
                                    </Button>
                                </Grid>
                                <FileUploading />
                                <ImageUploading />
                            </div>
                        </Grid>
                    </div>
                </CardContent>
            </Card>
        </Grid>
    );
};



const TextCreation = () => {
    let navigate = useNavigate();
    const [showAlert, setShowAlert] = useState(false);
    const [templates, setTemplates] = useState([]);

    const GoHome = () => {
        navigate("/");
    };

    const handleCreate = () => {
        setShowAlert(true);
        setTemplates((prevTemplates) => [...prevTemplates, {}]);
    };

    return (
        <>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: "center", flexDirection: 'column' }}>
            <Button variant="outlined" onClick={handleCreate}>Create</Button>
            <Button variant="text" onClick={GoHome}>Go Home</Button>
          </div>
           <div style={{ display: 'flex', flexDirection: 'row',justifyContent:'space-between',padding:'3%' }}>
            {showAlert && (
                <>
                    <div style={{ fontFamily: 'AvertaStd-Bold', fontSize: "1.2rem", fontWeight: '700' }}>Further Reading & Reference</div>
                    <div style={{ fontSize: '15px', color: 'rgb(137, 77, 158)', fontFamily: 'AvertaStd-SemiBold' }}  onClick={handleCreate}>+ New Section</div>
                </>
            )}
            </div>
<div style={{ display: 'flex', justifyContent: 'center', alignItems: "center", flexDirection: 'column' }}>
            {showAlert && templates.map((_, index) => (
                <Template key={index} templateIndex={index} />
            ))}
            </div>
            </>
        
    );
};

export default TextCreation;

