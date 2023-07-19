export type ListItemType = {
  id: string
  priority: PriorityTypes
  text: string
}

export type PriorityTypes = 'high' | 'medium' | 'low'