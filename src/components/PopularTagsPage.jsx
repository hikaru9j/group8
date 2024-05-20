import React, { useState } from 'react';
import { Container, Box, Grid, Typography, Paper, TextField, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

// 人気のタグ（実装しなくてもよい）
const TAGS = ["生活", "勉強", "試験", "就活", "結婚", "受験"];

const PopularTagsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    // コンソールで挙動確認用
    console.log('検索ワード:', searchTerm);
    
    // ここ以下に検索処理を追加します
  };



  return (
    <Container>
      <Box sx={{ textAlign: 'center', margin: '20px 0' }}>
        <TextField 
          variant="outlined" 
          placeholder="キーワードを入力..." 
          fullWidth 
          sx={{ marginTop: 2 }}
          value={searchTerm}
          onChange={handleSearchChange}
        />
        {/* 提出ボタン */}
        <Button 
          variant="contained" 
          color="primary" 
          sx={{ marginTop: 2 }} 
          startIcon={<SearchIcon />} 
          onClick={handleSearchSubmit}
        >
          検索
        </Button>
      </Box>
      {/* 人気のタグ表示機能 */}
      <Box sx={{ padding: 2 }}>
        <Typography variant="h5" gutterBottom>
          人気のタグ
        </Typography>
        <Grid container spacing={2}>
          {TAGS.map((tag) => (
            <Grid item key={tag} xs={4} sm={2}>
              <Paper 
                elevation={3} 
                sx={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  height: 100 
                }}
              >
                <Typography variant="body1">{tag}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default PopularTagsPage;
