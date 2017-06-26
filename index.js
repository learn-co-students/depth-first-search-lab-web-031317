function depthFirstSearch(rootNode, vertices, edges){
  let stack = [rootNode]
  let visited = [rootNode]
  while (stack.length > 0) {
   let node = stack.pop()
   if (node.discovered === null) {
     node.discovered = true
    findConnectedNodes(node, vertices, edges).forEach( cn => {
      visited.push(cn)
      stack.push(cn)})
   }
  }
  return visited
}

function findConnectedNodes(node, vertices, edges){
  let connectedVertices = []
  let connectedNames = edges.filter( edge => edge.includes(node.name) )
  let connections = connectedNames.map( cn => cn.filter( n => n !== node.name)[0])
  connections.forEach( conn => vertices.forEach( vert => {if (vert.name === conn && vert.discovered === null) {
    connectedVertices.push(vert)
  }}))
  return connectedVertices
}
