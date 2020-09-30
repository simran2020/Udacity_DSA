class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

    # def __repr__(self):  # string representation of a Node
    #     return f"Node({self.data})"


class LinkedList:
    def __init__(self):
        self.head = None  # initialize head to None

    def insert_tail(self, data) -> None:
        if self.head is None:
            # if this is the first node, call insert_head
            self.insert_head(data)
        else:
            temp = self.head
            while temp.next:  # traverse to the last node
                temp = temp.next
            temp.next = Node(data)  # create Node and link to tail

    def insert_head(self, data) -> None:
        new_node = Node(data)  # create a new node
        new_node.next = self.head
        self.head = new_node

    def print_list(self) -> None:
        temp = self.head
        while temp:
            print(temp.data)
            temp = temp.next

    def delete_head(self):  # delete from head
        temp = self.head
        if self.head:
            self.head = self.head.next
            temp.next = None

    def delete_tail(self):
        temp = self.head
        if self.head:
            if self.head.next is None:  # if head is the only Node in the Linked List
                self.head = None
            else:
                while temp.next.next:  # find the 2nd last element
                    # (2nd last element).next = None and temp = last element
                    temp = temp.next
                    temp.next, temp = None, temp.next
                return temp

    def is_empty(self) -> bool:
        return self.head is None  # return true if head is None

    def reverse(self):
        prev = None
        current = self.head

        while current:
            next_node = current.next
            # Make the current node's next point backwards
            current.next = prev
            # make the previous node be the current node
            prev = current
            # Make the current node the next node (to progress iteration)
            current = next_node

        # Return prev in order to put the head at the end
        self.head = prev

    def __repr__(self):  # String representation/visualization of Linked List
        current = self.head
        string_repr = ""
        while current:
            string_repr += f"{current} -->"
            current = current.next
        # END represents end of list
        return string_repr + "END"

    # Indexing Support. Used to get a node at particular position
    def __getitem__(self, index):
        current = self.head

        # If LinkedList is empty
        if current is None:
            raise IndexError("The Linked List is empty")

        # Move Forward 'index' times
        for _ in range(index):
            # If the LinkedList ends before reaching specified node
            if current.next is None:
                raise IndexError("Index out of range.")
            current = current.next
        return current

    # Used to change the data of a particular node
    def __setitem__(self, index, data):
        current = self.head
        # If list is empty
        if current is None:
            raise IndexError("The Linked List is empty")
        for i in range(index):
            if current.next is None:
                raise IndexError("Index out of range.")
            current = current.next
        current.data = data


def main():
    A = LinkedList()
    A.insert_head(input("Inserting 1st at head ").strip())
    A.insert_head(input("Inserting 2nd at head ").strip())
    print("\nPrint list:")
    A.print_list()
    A.insert_tail(input("\nInserting 1st at tail ").strip())
    A.insert_tail(input("Inserting 2nd at tail ").strip())
    print("\nPrint list:")
    A.print_list()
    print("\nDelete head")
    A.delete_head()
    print("Delete tail")
    A.delete_tail()
    print("\nPrint list:")
    A.print_list()
    print("\nReverse linked list")
    A.reverse()
    print("\nPrint list:")
    A.print_list()
    print("\nString representation of linked list:")
    print(A)
    print("\nReading/changing Node data using indexing:")
    print(f"Element at Position 1: {A[1]}")
    A[1] = input("Enter New Value: ").strip()
    print("New list:")
    print(A)


if __name__ == "__main__":
    main()
