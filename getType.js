export default function getType(data){
  return Object.prototype.toLocaleString.call(data)
}