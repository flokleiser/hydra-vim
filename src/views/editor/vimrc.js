export default function(CodeMirror) {
  if (!CodeMirror.Vim) return
  
  CodeMirror.Vim.map('J', '5j', 'normal')
  CodeMirror.Vim.map('K', '5k', 'normal')
  CodeMirror.Vim.map('L', '5l', 'normal')
  CodeMirror.Vim.map('H', '5h', 'normal')

//   CodeMirror.Vim.map('<C-d>', '<C-f>', 'normal')
//   CodeMirror.Vim.map('<C-u>', '<C-b>', 'normal')
  
//   CodeMirror.Vim.map('<leader>w', ':w<CR>', 'normal')
//   CodeMirror.Vim.map('<leader>q', ':q<CR>', 'normal')
  
//   CodeMirror.Vim.defineEx('w', 'write', function(cm) {
//     console.log('File saved (simulated)')
//   })
  
//   CodeMirror.Vim.defineEx('q', 'quit', function(cm) {
//     console.log('Quit command (simulated)')
//   })
  
//   CodeMirror.Vim.defineOption('leader', '\\', 'string')
}
