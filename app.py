from flask import Flask, render_template_string, request, jsonify

app = Flask(__name__, static_url_path='', static_folder='.')

@app.route('/')
def index():
    with open('index.html', encoding='utf-8') as f:
        return render_template_string(f.read())

@app.route('/convert', methods=['POST'])
def convert():
    data = request.get_json()
    input_text = data.get('input')
    conversion_type = data.get('type')
    
    if conversion_type == 'ascii_to_word':
        try:
            output_text = ''.join([chr(int(i)) for i in input_text.split()])
        except ValueError:
            output_text = 'Invalid ASCII input'
    elif conversion_type == 'word_to_ascii':
        output_text = ' '.join([str(ord(c)) for c in input_text])
    
    return jsonify({'result': output_text})

if __name__ == '__main__':
    app.run(debug=True)
