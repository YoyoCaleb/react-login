import tkinter as tk 

root = tk.Tk()

root.geometry("800x500")
root.title("Login2FA")

label = tk.Label(root, text="Enter your credidentials", font=('Arial',18))
label.pack(padx=20, pady=20)

textbox = tk.Text(root, height=3, font=('Arial', 16))
textbox.pack()

root.mainloop()