'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import searchBarStyle from './searchBar.module.scss';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Backdrop, Dialog } from '@mui/material';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import searchAction from '@actions/search.action';

export default function SearchBar() {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = (): void => {
    setOpen(true);
  }
  const handleClose = (): void => {
    setOpen(false);
  }
  return (
    <div className={searchBarStyle['container']}>
      <div className={searchBarStyle["searchBtn"]}>
        <button type="button" onClick={handleOpen}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        slots={{backdrop: Backdrop}}
        slotProps={{backdrop: {sx: {backgroundColor: "#fdfdfd"}}}}
        PaperProps={{
          component: 'div',
          className: searchBarStyle['search-dialog'],
          style: {
            boxShadow: 'none',
          }
        }}
      >
        <button type="button" onClick={handleClose} className={searchBarStyle['search-dialog__close-btn']}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <form
          className={searchBarStyle['search-dialog__form']}
          // action={searchAction}
          onSubmit={handleClose}
        >
          <input type="text" name="search" placeholder='Search here...'/>
        </form>
      </Dialog>
    </div>
  )
}
