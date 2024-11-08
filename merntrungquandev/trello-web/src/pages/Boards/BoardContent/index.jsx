
import Box from '@mui/material/Box'
function BoardContent() {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => `calc(100vh - ${theme.trello.boardBarHeight} - ${theme.trello.appBarHeight})`,
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : 'primary.main'),
      display: 'flex',
      alignItems: 'center'
    }}>
      Board Content
    </Box>
  )
}

export default BoardContent