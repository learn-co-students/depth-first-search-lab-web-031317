let depthFirstSearch = (root, vertices, edges) => {
  let stack = [root]
  let visited = [root]
  while (stack.length > 0) {
    let node = stack.pop()
    if (node.discovered === null) {
      node.discovered = true
      findConnNodes(node, vertices, edges).forEach( cn => {
        visited.push(cn)
        stack.push(cn)
      })
    }
  }
  return visited
}

let findConnNodes = (node, vertices, edges) => {
  let connVertices = []
  let connNames = edges.filter ( edge => edge.includes(node.name))
  // finds each edge set with the matching node.name (ex.'34th&6th')
  let connections = connNames.map ( conn => conn.filter( n => n !== node.name)[0])
  // maps through connNames then filters through the edge set to find the connections (i.e. not the node, but the other name in the set)
  connections.forEach( conn => vertices.forEach( vert => {
    if(vert.name === conn && vert.discovered === null){
      connVertices.push(vert)
    }
  }))
  return connVertices
}
