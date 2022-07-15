import React, { useState, useEffect } from 'react';

import BookmarksView from "./bookmarks.view"

import {useLots} from "@hooks/useLots"
import {useTemplates} from "@hooks/useTemplates"

const BookmarksContainer = ({...props}) => {
  const lots = useLots({isInitialLoad: true, initialFilters: {filter: "bookmarks"}, initialShow: "bookmarks",  showOptions: null})
  // const templates = useTemplates({entry: "templates", onFilter: lots.onFilter})

  return (
    <BookmarksView
      {...props}
      lots={lots}
      // templates={templates}
    />
  );
}

export default BookmarksContainer;
