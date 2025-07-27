import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  reels: [
    {
      id: '1',
      videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
      profileName: 'user1',
      caption: 'Exploring the mountains! 🏞️',
      likes: 120,
      comments: 15,
      shares: 10,
    },
    {
      id: '2',
      videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      profileName: 'user2',
      caption: 'City vibes at night 🌆',
      likes: 85,
      comments: 8,
      shares: 5,
    },
    {
      id: '3',
      videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      profileName: 'user3',
      caption: 'Chasing sunsets 🌅',
      likes: 200,
      comments: 25,
      shares: 15,
    },
    {
      id: '4',
      videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      profileName: 'user4',
      caption: 'Beach day fun! 🏖️',
      likes: 150,
      comments: 12,
      shares: 7,
    },
    {
      id: '5',
      videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      profileName: 'user5',
      caption: 'Morning coffee vibes ☕',
      likes: 90,
      comments: 10,
      shares: 3,
    },
  ],
};

const reelsSlice = createSlice({
  name: 'reels',
  initialState,
  reducers: {
    likeReel: (state, action) => {
      const reel = state.reels.find((r) => r.id === action.payload);
      if (reel) reel.likes += 1;
    },
    addComment: (state, action) => {
      const reel = state.reels.find((r) => r.id === action.payload.id);
      if (reel) reel.comments += 1;
    },
    shareReel: (state, action) => {
      const reel = state.reels.find((r) => r.id === action.payload);
      if (reel) reel.shares += 1;
    },
  },
});

export const { likeReel, addComment, shareReel } = reelsSlice.actions;
export default reelsSlice.reducer;