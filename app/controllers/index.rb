get '/' do
  # Look in app/views/index.erb
  erb :index
end

get '/create_user' do
  erb :create_user
end 


post '/home' do 
  # take login info from post 
  # pull up user object 
  # find or user create 
  erb :home 
end 

 post '/create_user' do
  user = User.new
  erb :home 
 end 

# use .text 